import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LangSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">English</SelectItem>
          <SelectItem value="banana">Nepal</SelectItem>
          <SelectItem value="blueberry">Chinese</SelectItem>
          <SelectItem value="grapes">Korean</SelectItem>
          <SelectItem value="pineapple">Japanaes</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
