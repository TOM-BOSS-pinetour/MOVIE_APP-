import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { ModeToggle } from "./_features/ModeToggle";
// 
export default function Header() {
  return (
    <div className="flex items-center justify-center w-full h-[59px] mb-[24px]">
      <div className="h-[36px] max-w-[1280px] w-[1280px] flex justify-between items-center">
        <div className="flex row gap-[12px]">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
