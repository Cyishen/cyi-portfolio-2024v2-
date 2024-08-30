import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileUI() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <p>123</p>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4">

        </div>

      </SheetContent>
    </Sheet>
  )
}
