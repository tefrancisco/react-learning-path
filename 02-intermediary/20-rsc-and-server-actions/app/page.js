import fs from 'node:fs/promises';

import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromiseDemo";

export default async function Home() {
  const data = await fs.readFile("dummy-db.json", "utf-8");
  const users = JSON.parse(data);

  return (
    <main>
      <UsePromiseDemo users={users} />
    </main>
  );
}
