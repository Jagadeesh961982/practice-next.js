async function getdata() {
  const endpoint = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? process.env.NEXT_PUBLIC_VERCEL_URL : "/api/posts";
  const res = await fetch(endpoint);
  console.log("resultant is", res);
  try {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    //console.log(error);
  }
  return res.json();
  
}

export default async function BlogPage() {
  const data = await getdata();
  const items=data && data.items ? [...data.items] : []
  return (
    <main>
      <h1>Hello World</h1>
      <p>posts</p>
      {items && items.map((item,idx)=>{
        return <li key={`post-${idx}`}>{item.title}</li>
      })}
    </main>
  );
}
