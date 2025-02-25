import Link from "next/link"

export default function Home() {
  return (
    <div className="text-black pb-10">
      <div className="flex flex-col items-center">
        <Link href={"/review"}>
          <div className="btn">
            Sample Review Page 
          </div>
        </Link>
        Please check out the Blog as well :)
        </div>
      </div>
  );
}
