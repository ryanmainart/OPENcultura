import {CommentForm} from '@/components/contributions'
import {forumEndpoint} from '@/lib/endpoints'
export const dynamic='force-dynamic'
type Post={nick?:string;date?:string;comment:string}
async function loadPosts():Promise<Post[]|null>{try{const r=await fetch(forumEndpoint,{cache:'no-store',signal:AbortSignal.timeout(8000)});if(!r.ok)return null;const data=await r.json();return Array.isArray(data)?data.filter(p=>p&&typeof p.comment==='string').reverse():null}catch{return null}}
export default async function Forum(){const posts=await loadPosts();return <main className="wrap inner"><div className="eyebrow"><i/> Comunidade OPEN Cultura</div><h1>Fórum<span className="accent">.</span></h1><section className="panel"><h2>Fale com a comunidade</h2><CommentForm/></section><section className="panel"><h2>Comentários</h2>{posts===null?<p>Não foi possível carregar os comentários. <a className="secondary" href="/forum">Tentar novamente</a></p>:posts.length===0?<p>Nenhum comentário ainda. Seja o primeiro!</p>:posts.map((p,i)=><article className="post" key={i}><b>{String(p.nick||'Anônimo')}</b><time>{String(p.date||'')}</time><p>{p.comment}</p></article>)}</section></main>}
