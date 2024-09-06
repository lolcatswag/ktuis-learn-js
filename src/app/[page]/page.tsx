"use client"

import Image from "next/image";
import styles from "../page.module.css";

import Page1 from '@/app/mdx/1.mdx'
import Page2 from '@/app/mdx/2.mdx'

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import "@/app/[page]/mdx-highlight.css"

const pages = [
  {
    title: "Основы",
    markdown: <Page1/>
  },
  {
    title: "Первые шаги в JavaScript",
    markdown: <Page2/>
  },
  {
    title: "АХАХАХАХАХ",
    markdown: <Page1/>
  }
]

export default function Home({ params } : { params: { page: string } }) {
  const pageNumber = Number(params.page)

  return (
    <main className="h-full w-full absolute px-4 sm:px-8 md:px-12 lg:px-24 xl:px-30 2xl:px-40 pt-40 flex flex-col gap-y-10">
      {pages[pageNumber-1] ? 
        <>
          <h1 className="w-full text-6xl flex flex-row gap-x-4">
            {pageNumber-1}: 
            <p className="break-all">{pages[pageNumber-1].title}</p>
          </h1>
          {pages[pageNumber-1].markdown}
          <div className="relative mt-64">
            {pages[pageNumber-2] &&
              <Link 
                href={`/${pageNumber-1}`} 
                className="min-w-44 flex flex-col items-start gap-y-4 hover:bg-primary/10 transition p-4 rounded-xl absolute left-0 bottom-10
                hover:-translate-y-2"
              >
                <div className="flex flex-row gap-x-4 text-primary opacity-50">
                  <ArrowLeftIcon/>
                  <p>Назад</p>
                </div>
                <span>{pageNumber-2}: {pages[pageNumber-2].title}</span>
              </Link>
            }
            {pages[pageNumber] &&
              <Link 
                href={`/${pageNumber+1}`} 
                className="min-w-44 flex flex-col items-end gap-y-4 hover:bg-primary/10 transition p-4 rounded-xl absolute right-0 bottom-10
                hover:-translate-y-2"
              >
              <div className="flex flex-row gap-x-4 text-primary opacity-50">
                <p>Вперед</p>
                <ArrowRightIcon/>
              </div>
              <span>{pageNumber}: {pages[pageNumber].title}</span>
            </Link>
            }
          </div>
        </> : 
        <div>
          <h1 className="mb-8">Упс... Вы не должны были это увидеть :(</h1>
          <p className="text-primary/50">Данная страница учебника не найдена...</p>
        </div>
      }
    </main>
  );
}
