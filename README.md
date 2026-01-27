## 📖 Sobre o Projeto

**Noble Essence** é uma Landing Page responsiva desenvolvida para uma perfumaria de luxo fictícia. O objetivo deste projeto foi criar uma experiência visual imersiva e elegante, alinhada à identidade sofisticada da marca. O desenvolvimento focou na utilização de HTML, CSS e JavaScript puros (Vanilla), sem o uso de frameworks ou bibliotecas externas, visando o domínio completo das tecnologias base da web. 

Este projeto faz parte do meu portfólio de desenvolvimento Front-end, demonstrando habilidades em construção de layouts semânticos, modularização de arquivos e interatividade com JavaScript puro (Vanilla JS).

### 🔗 [Clique aqui para acessar o projeto online (https://noble-essence-project.vercel.app/)

## 🚀 Funcionalidades Principais

* **Menu Responsivo:** Barra de navegação que se adapta a dispositivos móveis com menu lateral (Sidebar) e transições suaves.
* **Carrossel de Imagens Reutilizável:** Componente de slider desenvolvido do zero em JavaScript (sem bibliotecas externas) para o banner principal e para a seção de depoimentos.
* **Scroll Reveal:** Animações de entrada conforme o usuário rola a página, utilizando a API `IntersectionObserver` para melhor performance.
* **Galeria Interativa:** Layout em Grid responsivo para exibição de imagens conceituais.
* **Acessibilidade (a11y):** Uso de atributos ARIA (`aria-expanded`, `aria-hidden`, `aria-controls`) para tornar a navegação e os sliders acessíveis a leitores de tela.

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação correta do conteúdo (`<header>`, `<main>`, `<section>`, `<article>`, `<figure>`).
* **CSS3 Modular:**
    * O projeto Noble Essence foi desenvolvido utilizando uma abordagem modular e moderna de estilização, focada em performance, manutenção e escalabilidade. 
    * Organização de estilos em arquivos separados (`hero.css`, `cards.css`, `footer.css`, etc.) para facilitar a manutenção.
    * **Flexbox & CSS Grid:** Para layouts robustos e alinhamentos precisos.
    * **Normalize.css:** Para garantir consistência entre diferentes navegadores.
    * **Media Queries:** Design totalmente responsivo (Mobile First approach).
    * Para garantir a acessibilidade e escalabilidade do layout: Rem Units: Foi adotada a técnica de definir o font-size base mais intuitivo e amigável ao zoom do navegador.
    * **Animações e Efeitos Visuais:** Keyframes e Transições: Utilização de @keyframes para o efeito de fade-in suave no carregamento da seção Hero. Hover Effects: Micro-interações nos cards de depoimento, com transformações de escala e mudança de cores para melhorar o feedback visual ao usuário. Glassmorphism: Aplicação de backdrop-filter: blur no menu mobile, conferindo uma estética moderna e translúcida.
* **JavaScript (ES6+):**
    * Manipulação do DOM. Cada instância mantém seu próprio estado de slide atual e referências de DOM.
    * Navegação Cíclica: Utilização do operador de resto (%) e Math.abs para garantir que a navegação entre os itens seja infinita e contínua.
    * Lógica orientada a objetos para o componente de Carrossel.
    * Intersection Observer API.
    * Acessibilidade (A11y) Dinâmica.
    * Responsividade Programática. Utilização de window.matchMedia para monitorar mudanças na largura da tela. Isso permite que o comportamento do cabeçalho seja ajustado automaticamente entre os modos desktop e mobile sem depender exclusivamente de Media Queries do CSS, garantindo uma transição de estado mais robusta.
