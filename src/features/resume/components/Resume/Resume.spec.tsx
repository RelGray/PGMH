import { expect, test } from 'vitest';
import { render } from 'vitest-browser-react';

import Resume from '~features/resume/components/Resume';

test('counter button increments the count', async () => {
  const screen = await render(<Resume />);

  // await screen.getByRole('button', { name: 'Increment' }).click()

  await expect.element(screen.getByText('Count is 2')).toBeVisible();
});
