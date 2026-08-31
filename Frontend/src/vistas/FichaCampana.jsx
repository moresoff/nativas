import { useState } from 'react'
import BloqueTexto from '../componentes/BloqueTexto'
import PostItNota from '../componentes/PostItNota'
import './FichaCampana.css'

const ESTADOS = {
  activa: { texto: 'Dando resultados', clase: 'estado-punto--activa' },
  lista: { texto: 'Para revisar', clase: 'estado-punto--lista' },
  borrador: { texto: 'Recién arrancando', clase: 'estado-punto--borrador' },
}

/* Simulación de "la IA recorta tu foto para cada formato de pauta" —
   misma foto real de la campaña, solo cambia el aspect-ratio y el
   encuadre. Lookup por nombre de formato para poder mostrar solo los
   formatos que esta campaña puntual eligió usar (campana.formatos),
   no una lista fija. */
const RECORTE_POR_FORMATO = {
  'Post cuadrado (1:1)': { aspecto: '1 / 1', posicion: 'center' },
  'Historia (9:16)': { aspecto: '9 / 16', posicion: '50% 30%' },
  'Banner horizontal (16:9)': { aspecto: '16 / 9', posicion: 'center' },
}

export default function FichaCampana({ campana, onVolver }) {
  const [copy, setCopy] = useState(campana.copy)
  const [tyc, setTyc] = useState(campana.tyc)
  const [nota, setNota] = useState('')
  const estado = ESTADOS[campana.estado]

  return (
    <div className="ficha-campana">
      <button type="button" className="btn btn--fantasma btn--chico ficha-campana__volver" onClick={onVolver}>
        ← Campañas
      </button>

      <div className="ficha-campana__encabezado">
        <div>
          <p className="rotulo">{campana.detalle}</p>
          <h1>{campana.titulo}</h1>
        </div>
        <p className="ficha-campana__estado">
          <span className={'estado-punto ' + estado.clase} aria-hidden="true" />
          <span>{estado.texto}</span>
          <span className="ficha-campana__separador" aria-hidden="true">·</span>
          <span>{campana.resultado}</span>
        </p>
      </div>

      <div className="ficha-campana__principal">
        <div className="ficha-campana__galeria">
          <div className="ficha-campana__foto">
            <img src={campana.foto} alt={campana.titulo} />
          </div>
          <div className="ficha-campana__formatos">
            {campana.formatos.map((f) => (
              <span key={f} className="chip chip--pendiente">{f}</span>
            ))}
          </div>
        </div>

        <dl className="ficha-campana__datos">
          <div>
            <dt className="rotulo">A quién le habla</dt>
            <dd>{campana.segmento}</dd>
          </div>
          <div>
            <dt className="rotulo">Objetivo</dt>
            <dd>{campana.objetivo}</dd>
          </div>
          <div>
            <dt className="rotulo">Qué transmite</dt>
            <dd>{campana.transmite}</dd>
          </div>
          <div>
            <dt className="rotulo">Creada</dt>
            <dd>{campana.fecha}</dd>
          </div>
        </dl>
      </div>

      <div className="ficha-campana__formatos-seccion">
        <div className="ficha-campana__formatos-encabezado">
          <h2>Piezas por formato</h2>
          <span className="chip chip--pendiente">Simulado — recorte automático de tu foto</span>
        </div>
        <div className="ficha-campana__formatos-grid">
          {campana.formatos.map((f) => {
            const recorte = RECORTE_POR_FORMATO[f]
            if (!recorte) return null
            return (
              <div key={f} className="ficha-campana__formato-item">
                <div className="ficha-campana__formato-preview" style={{ aspectRatio: recorte.aspecto }}>
                  <img src={campana.foto} alt={`${campana.titulo} — ${f}`} style={{ objectPosition: recorte.posicion }} />
                </div>
                <p className="ficha-campana__formato-etiqueta">{f}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="ficha-campana__notas-fila">
        <div className="ficha-campana__textos">
          <BloqueTexto etiqueta="Copy de campaña" value={copy} onGuardar={setCopy} />
          <BloqueTexto etiqueta="Términos y condiciones" value={tyc} onGuardar={setTyc} />
        </div>

        <div className="ficha-campana__nota">
          <PostItNota valor={nota} onChange={setNota} placeholder="Anotá algo sobre esta campaña…" />
        </div>
      </div>
    </div>
  )
}
