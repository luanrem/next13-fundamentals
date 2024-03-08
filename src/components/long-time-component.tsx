export async function LongTimeComponent() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return <div>Long time component!</div>
}
