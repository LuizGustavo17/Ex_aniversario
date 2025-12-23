AOS.init();
const dataDoEvento=new Date("Nov 02, 2025 17:00:00");
const timeStampDoEvento=dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora=new Date();
    const timeStampAtual= agora.getTime();
    const DistanciaAteoEvento = timeStampDoEvento- timeStampAtual;
    const DiasAteOEvento = Math.floor(DistanciaAteoEvento/(1000*60*60*24));
    const HorasAteOEvento = Math.floor((DistanciaAteoEvento%(1000*60*60*24))/(1000*60*60));
    const MinutosAteOEvento = Math.floor((DistanciaAteoEvento % (1000*60*60))/(1000*60));
    const SegundosAteOEvento = Math.floor((DistanciaAteoEvento%(1000*60))/1000);
    document.getElementById('contador').innerHTML= `${DiasAteOEvento}d ${HorasAteOEvento}h ${MinutosAteOEvento}m ${SegundosAteOEvento}s`;
    if(DistanciaAteoEvento<0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML='Já Começou';
    }

}, 1000);
