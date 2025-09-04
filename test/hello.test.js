const { execSync } = require('child_process');

describe('Hello World', () => {
  test('should output hello message', () => {
    const output = execSync('node hello.js', { encoding: 'utf-8' });
    expect(output).toContain('Hello, World from MCP!');
    expect(output).toContain('MCP workflow integration');
  });
});
