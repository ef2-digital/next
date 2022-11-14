import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { Container } from '@ef2/react';
import Item, { ItemProps } from './Item';
import { RefObject, useCallback, useEffect } from 'react';
import { Skew } from 'components/text';
import { motion, Variants } from 'framer-motion';

interface MenuMobileProps {
    open: boolean;
    items: Omit<ItemProps, 'as'>[];
    closeRef: RefObject<HTMLButtonElement>;
    lastItemRef: RefObject<HTMLAnchorElement>;
    firstItemRef: RefObject<HTMLAnchorElement>;
    close: () => void;
}

// Motion.
const variants: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    },
    initial: {
        transition: {
            staggerDirection: -1
        }
    }
};

const itemVariants: Variants = {
    animate: { x: 0, opacity: 1 },
    initial: { x: 112, opacity: 0.2 }
};

const ItemMobile = motion(Item);

const MenuMobile = ({ items, open, closeRef, firstItemRef, lastItemRef, close }: MenuMobileProps) => {
    // Methods.
    const handleOnKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (lastItemRef.current === event.target && !event.shiftKey && open) {
                event.preventDefault();
                return closeRef.current?.focus();
            }

            if (firstItemRef.current === event.target && event.shiftKey) {
                event.preventDefault();
                return lastItemRef.current?.focus();
            }

            if (event.key === 'Escape') {
                return close();
            }
        },
        [close, closeRef, firstItemRef, lastItemRef, open]
    );

    // Life cycle.
    useEffect(() => {
        if (!open && document.body.classList.contains('overflow-hidden')) {
            return document.body.classList.remove('overflow-hidden');
        }

        if (open && !document.body.classList.contains('overflow-hidden')) {
            return document.body.classList.add('overflow-hidden');
        }
    }, [open]);

    useEffect(() => {
        window.addEventListener('keydown', handleOnKeyPress);
        return () => window.removeEventListener('keydown', handleOnKeyPress);
    }, [handleOnKeyPress]);

    // Render.
    return (
        <Disclosure.Panel
            static
            className={classNames(
                'fixed top-[5rem] right-0 z-[99] flex h-[calc(100vh-5rem)] w-full flex-col overflow-hidden bg-white bg-radial-mobile transition-[width] duration-500 ease-in-out motion-reduce:transition-none md:top-[6rem] md:hidden md:h-[calc(100vh-6rem)]',
                { 'w-screen': open, 'w-0': !open }
            )}
        >
            <div className="w-screen">
                <Container className="pt-14">
                    <Skew inView={open} as="span" className="h2 delay-100" aria-hidden>
                        Menu
                    </Skew>
                    <motion.ul initial={false} animate={open ? 'animate' : 'initial'} variants={variants} className="mt-6 flex flex-col">
                        {items.map((item) => (
                            <ItemMobile
                                variants={itemVariants}
                                transition={{ duration: 0.4 }}
                                key={item.children as string}
                                {...item}
                                button={false}
                            />
                        ))}
                    </motion.ul>
                </Container>
            </div>
        </Disclosure.Panel>
    );
};

export default MenuMobile;
