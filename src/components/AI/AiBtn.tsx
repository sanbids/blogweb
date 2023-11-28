import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Bot } from "lucide-react";

export default function AiBtn() {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Bot className="mr gap-x-1-2" />
            AI </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Ask Questions?</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Summarize Blog </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
