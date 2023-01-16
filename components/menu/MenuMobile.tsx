import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';
import { Container } from '@ef2/react';
import { RefObject, useCallback, useEffect } from 'react';
import { NavigationItem } from 'utils/graphql';
import NavigationLink from 'components/navigation/NavigationLink';

interface MenuMobileProps {
    open: boolean;
    items: NavigationItem[];
    closeRef: RefObject<HTMLButtonElement>;
    lastItemRef: RefObject<HTMLAnchorElement>;
    firstItemRef: RefObject<HTMLAnchorElement>;
    close: () => void;
}

const activeItemClassName = 'text-secondary';
const itemClassName = 'block leading-10 font-montserrat text-base font-medium hover:text-secondary mb-2';

const MenuMobile = ({ items, open, closeRef, firstItemRef, lastItemRef, close }: MenuMobileProps) => {
    // Methods.
    const handleOnKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (lastItemRef.current === event.target && !event.shiftKey && event.key === 'Tab' && open) {
                event.preventDefault();
                return closeRef.current?.focus();
            }

            if (firstItemRef.current === event.target && event.shiftKey && event.key === 'Tab' && open) {
                event.preventDefault();
                return closeRef.current?.focus();
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

    const itemFirst = items.at(0);
    const itemsFiltered = items.slice(1, -1);
    const itemLast = items.at(-1);

    // Render.
    return (
        <Disclosure.Panel
            static
            className={classNames(
                'md:hidden bg-white fixed top-[5rem] right-0 z-10 w-full flex flex-col transition-[width] duration-500 ease-in-out motion-reduce:transition-none overflow-hidden h-[calc(100vh-5rem)]',
                { 'w-screen': open, 'w-0': !open }
            )}
        >
            <div className="w-screen">
                <Container>
                    <ul className="my-8 flex flex-col">
                        <li>
                            <NavigationLink
                                ref={firstItemRef}
                                activeClassName={activeItemClassName}
                                className={itemClassName}
                                {...itemFirst}
                            />
                        </li>
                        {itemsFiltered.map((item, index) => (
                            <li key={item.id}>
                                <NavigationLink activeClassName={activeItemClassName} className={itemClassName} />
                            </li>
                        ))}
                        <li>
                            <NavigationLink
                                ref={lastItemRef}
                                activeClassName={activeItemClassName}
                                className={itemClassName}
                                {...itemLast}
                            />
                        </li>
                    </ul>
                </Container>
            </div>
        </Disclosure.Panel>
    );
};

export default MenuMobile;
