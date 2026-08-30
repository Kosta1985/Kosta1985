export interface Env { ASSETS: Fetcher }

function json(data:unknown,status=200){
  return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store"}})
}

export default {
  async fetch(req:Request,env:Env):Promise<Response>{
    const url=new URL(req.url)
    if(url.pathname==="/api/status"){
      return json({
        service:"CourtCompass Australia",
        mode:"temporary-ui-preview",
        backend:false,
        legal_ai:false,
        document_upload:false,
        payments:false,
        notice:"Static preview only. Do not submit personal or legal information."
      })
    }
    if(url.pathname.startsWith("/api/")){
      return json({error:"preview_backend_disabled",notice:"Static UI preview only."},503)
    }
    const r=await env.ASSETS.fetch(req)
    const h=new Headers(r.headers)
    h.set("x-content-type-options","nosniff")
    h.set("referrer-policy","no-referrer")
    h.set("x-frame-options","DENY")
    h.set("content-security-policy","default-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; style-src 'self' 'unsafe-inline'; script-src 'none'; img-src 'self' data:")
    h.set("x-robots-tag","noindex, nofollow, noarchive")
    return new Response(r.body,{status:r.status,statusText:r.statusText,headers:h})
  }
} satisfies ExportedHandler<Env>
