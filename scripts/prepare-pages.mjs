import { copyFile, mkdir, writeFile } from 'node:fs/promises';

// Each route needs a real entry file for direct visits on GitHub Pages.
const routes = ['about', 'team', 'projects', 'projects/draig', 'projects/polaris', 'projects/bowser', 'sponsors', 'clt', 'contact'];
const output = new URL('../docs/', import.meta.url);
await writeFile(new URL('.nojekyll', output), '');
await copyFile(new URL('index.html', output), new URL('404.html', output));
for (const route of routes) {
  const directory = new URL(`${route}/`, output);
  await mkdir(directory, { recursive: true });
  await copyFile(new URL('index.html', output), new URL('index.html', directory));
}
