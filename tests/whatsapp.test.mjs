import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  buildGeneralWhatsAppPayload,
  buildGoalWhatsAppPayload,
  buildProcedureWhatsAppPayload,
  buildWhatsAppUrl,
  sanitizeBrazilPhoneDigits,
} from '../src/utils/whatsapp.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

test('sanitizes Brazilian phone numbers and encodes wa.me URLs properly', () => {
  assert.equal(sanitizeBrazilPhoneDigits('(41) 99999-0000'), '5541999990000');
  assert.equal(sanitizeBrazilPhoneDigits('+55 41 99999-0000'), '5541999990000');
  assert.equal(sanitizeBrazilPhoneDigits('041 99888-7766'), '5541998887766');

  const url = buildWhatsAppUrl('(41) 99999-0000', 'Olá! Avaliação clínica.');
  assert.equal(
    url,
    'https://wa.me/5541999990000?text=Ol%C3%A1!%20Avalia%C3%A7%C3%A3o%20cl%C3%ADnica.',
  );
});

test('builds contextual payloads for procedure, goal and general booking', () => {
  const proc = buildProcedureWhatsAppPayload(
    'Clínica Lumière',
    '5541999990000',
    'Bioestimuladores de Colágeno',
  );
  assert.equal(proc.contextLabel, 'Bioestimuladores de Colágeno');
  assert.ok(proc.message.includes('Bioestimuladores de Colágeno'));
  assert.ok(proc.url.startsWith('https://wa.me/5541999990000?text='));

  const goal = buildGoalWhatsAppPayload(
    'Clínica Lumière',
    '5541999990000',
    'Firmeza e Colágeno',
    ['Bioestimuladores de Colágeno', 'Ultrassom Microfocado'],
  );
  assert.ok(goal.message.includes('Firmeza e Colágeno'));
  assert.ok(goal.message.includes('Ultrassom Microfocado'));

  const general = buildGeneralWhatsAppPayload('Clínica Lumière', '5541999990000');
  assert.ok(general.message.includes('Clínica Lumière'));
});

test('clinicConfig keeps ethical copy, demo badge and zero em-dashes', () => {
  const configSource = readFileSync(resolve(projectRoot, 'src/data/clinicConfig.ts'), 'utf8');
  assert.equal(configSource.includes('\u2014'), false, 'No em-dashes in clinicConfig');
  assert.equal(configSource.toLowerCase().includes('resultado garantido'), false);
  assert.equal(configSource.toLowerCase().includes('100% indolor'), false);
  assert.equal(configSource.includes('demoMode: true'), true);
  assert.equal(configSource.includes('Página modelo demonstrativa'), true);
});

test('all referenced local images exist inside public/images', () => {
  const configSource = readFileSync(resolve(projectRoot, 'src/data/clinicConfig.ts'), 'utf8');
  const matches = [...configSource.matchAll(/\/images\/([a-z0-9-]+\.jpg)/g)].map((m) => m[1]);
  const uniqueImages = [...new Set(matches)];
  assert.equal(uniqueImages.length, 6, 'Expected 6 unique editorial image assets');
  for (const filename of uniqueImages) {
    const fileBuf = readFileSync(resolve(projectRoot, 'public/images', filename));
    assert.ok(fileBuf.length > 50_000, `${filename} should be a valid non-empty image`);
  }
});
