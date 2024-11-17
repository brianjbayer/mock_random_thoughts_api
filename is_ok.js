async function isOk(endpoint) {
  try {
    const response = await fetch(endpoint);
    console.log(`Endpoint [${endpoint}] returned code: [${response.status}]`);
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(`Endpoint [${endpoint}] returned error: [${error.message}]`);
    return false;
  }
}

// --- MAIN ---
if (process.argv.length === 2) {
  console.error('Missing endpoint argument');
  process.exit(2);
}
const endpoint = process.argv.slice(2).shift()

isOk(endpoint).then(ok => {
  const exitCode = ok ? 0 : 1
  process.exit(exitCode)
});
