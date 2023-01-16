'use client';

import { Container, Copyright } from '@ef2/react';
import { SingleTypeGeneralQuery } from 'graphql/types';
import StrapiProse from './Prose';

interface FooterProps {
    data?: SingleTypeGeneralQuery;
}

const Footer = ({ data }: FooterProps) => {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 className="sr-only">Footer</h2>
            <Container className="pb-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <img className="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Company name" />
                        <p className="text-sm leading-6 text-slate-500">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                        <StrapiProse html={data?.general?.data?.attributes?.address} />
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {/* {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))} */}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {/* {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))} */}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {/* {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))} */}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {/* {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))} */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
                    <Copyright className="!text-slate-400 hover:text-slate-500 text-sm" />
                    <span className="mt-6 text-sm text-slate-400 sm:mt-0">&copy; 2020 Your Company, Inc. All rights reserved.</span>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
