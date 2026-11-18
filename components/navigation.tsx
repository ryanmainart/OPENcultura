'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Github, CodeXml } from 'lucide-react'
export function Brand(){return <span className="brand"><i><CodeXml size={23}/></i><b>OPEN</b> Cultura</span>}
export default function Navigation(){const path=usePathname();return <header><div className="wrap top"><Link href="/" aria-label="OPEN Cultura — Início"><Brand/></Link><nav aria-label="Navegação principal">{[['/','Início'],['/materiais','Materiais'],['/assistente','Assistente de AI'],['/forum','Fórum']].map(([href,name])=><Link aria-current={path===href?'page':undefined} key={href} href={href}>{name}</Link>)}<a className="git" href="https://github.com/ryanmainart/OPENcultura/" target="_blank" rel="noopener noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a></nav></div></header>}
