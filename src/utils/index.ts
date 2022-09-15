import { networkInterfaces } from 'os';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getLocalAddress(): any {
  const nets = networkInterfaces();
  const results = Object.create(null); // Or just '{}', an empty object

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === 'IPv4' && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }
  return results;
}

export function gerLocalhost(): string {
  const address = getLocalAddress();
  const localhost = address[Object.keys(address)[0]]?.[0];
  return localhost;
}