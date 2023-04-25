import fs from 'node:fs/promises';
const outputFilePath = 'dist/boss_automatic_conversation.user.js';
const { version } = JSON.parse(await fs.readFile('package.json', 'utf8'));
const content = await fs.readFile(outputFilePath, 'utf8');
const newContent = content.replace(/\/\/ @version\s+.*$/m, `// @version      ${version}`);
await fs.writeFile(outputFilePath, newContent, 'utf8');
