import type { Metadata, Viewport } from 'next'
import Navigation, {Brand} from '@/components/navigation'
import './globals.css'
export const metadata: Metadata={title:'OPEN Cultura — Software livre para a produção cultural',description:'Conheça os benefícios do código aberto, descubra alternativas livres e compartilhe materiais com a comunidade OPEN Cultura.',icons:{icon:'/open-mark.svg'}}
export const viewport:Viewport={themeColor:'#faf9f5',colorScheme:'light'}
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><Navigation/>{children}<footer><div className="wrap foot"><Brand/><p>por Ryan Correia Mainart <span>·</span> Site para fins educacionais <span>·</span> Projeto de Extensão II</p></div></footer></body></html>}
