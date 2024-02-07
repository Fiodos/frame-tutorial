import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
  const data = await req.json();
  console.log(data);
  const buttonId = data.untrustedData.buttonIndex;
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextId = idAsNumber + 1
  const prevId = idAsNumber - 1

  let path: string;
  if (buttonId === 1) {
    path = `api/frame?id=${prevId}`;
  } else if (buttonId === 2) {
    path = `api/frame?id=${nextId}`;
  } else if (buttonId === 3) {
    path = `api/frame?id=${71}`;
  } else {
    path = "";
  }
  const headers = new Headers();
  headers.set("Location", `${process.env.NEXT_PUBLIC_BASE_URL}/`);
  const response = NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`,
    {
      headers: headers,
      status: 302,
    },
  );
  return response;
}

export const dynamic = "force-dynamic";