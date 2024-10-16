"use client";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {  useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Assuming these are from ShadCN

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();


  const handleSelectChange = (nextLocale: string) => {

    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onSelect={() => handleSelectChange("en")}
          disabled={isPending}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => handleSelectChange("pl")}
          disabled={isPending}
        >
          Polski
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
