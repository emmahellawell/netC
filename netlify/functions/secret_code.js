// secret_code.js
export async function handler(event, context) {
  // Check if user is authenticated
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Top secret data here!" })
  };
}