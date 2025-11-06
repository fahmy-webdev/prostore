import { Divide, UserIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import { Button } from "../../button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";


const Menu = () => {
    return (<div className="flex justify-end gap-3">
        <nav className="hidden md-flex w-full max-w-xs gap-1">
            <ModeToggle />
            <Button asChild variant='ghost'>
                <Link href="/cart">
                <ShoppingCart /> Cart
                </Link>
            </Button>
            <Button asChild>
                <Link href="/sign-in">
                <UserIcon />Sign in
                </Link>
            </Button>
        </nav>
    </div>);
}
 
export default Menu;