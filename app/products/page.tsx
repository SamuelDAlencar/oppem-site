import React from 'react';
import ProductCard from '../../components/ProductCard';

export default function Products() {
  return (
    <section className="flex flex-col items-center justify-around min-h-screen w-full py-8 mt-20">
      <h1 className="text-4xl">
        Nossos <span className="tiffany_span">Produtos</span>
      </h1>

      <div className="flex flex-wrap justify-center w-4/5 gap-8">
        <ProductCard title="Opus">
          <p>
            O Opus é a solução ideal para transformar a gestão de contratos no setor industrial. Com ele, é possível gerenciar contratos de forma ilimitada, acompanhar fisicamente
            e financeiramente em tempo real, e automatizar processos que aumentam o controle, a eficiência e reduzem custos.
          </p>
          <h3 className="font-semibold mt-4">Principais funcionalidades:</h3>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Gestão de Contratos e Obras:</strong> Gerencie contratos sem limites, com acompanhamento facilitado, assinatura eletrônica e segurança das informações.
            </li>
            <li>
              <strong>Segurança de Dados:</strong> Oferece rastreabilidade, acesso por nível de permissão, assinatura eletrônica e armazenamento de documentos na nuvem, garantindo
              confiabilidade para auditorias.
            </li>
            <li>
              <strong>RDO e Medição Integrados:</strong> Facilita o controle, organização e assinatura online de documentos com fluxo padronizado e integrado, assegurando
              auditorias eficientes.
            </li>
            <li>
              <strong>Automatização de Processos:</strong> Aumenta a produtividade e eficiência da equipe com processos padronizados, informações centralizadas e dados atualizados
              em tempo real.
            </li>
          </ul>
        </ProductCard>

        <ProductCard title="APR">
          <p>Nosso sistema de APR é nosso mais novo produto, inovando na geração de relatórios de análise preliminar de riscos.</p>
        </ProductCard>
      </div>
    </section>
  );
}
