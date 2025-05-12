import React from 'react';

const Events = () => {
    // Função para lidar com o clique do botão
    const handleClick = (e) => {
        console.log(e);
        console.log('Executou');
    };

    // Função de renderização condicional
    const renderSomething = (x) => {
        return x ? <h1>Renderizando isso</h1> : <h1>Renderizando outra coisa!</h1>;
    };

    return (
        <div>
            {/* Evento inline */}
            <div>
                <button onClick={() => console.log('Testando um evento')}>
                    Clique aqui
                </button>
            </div>

            {/* Evento com função */}
            <div>
                <button onClick={handleClick}>
                    Clique aqui - com função
                </button>
            </div>

            {/* Renderização condicional */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;