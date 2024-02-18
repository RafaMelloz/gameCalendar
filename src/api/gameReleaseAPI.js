
const key =  '4d9a49022ebf44a3a3558dbdcabb72fb';
var data = new Date();

const dia = data.getDate();
let mes = data.getMonth() + 1;
mes = mes < 10 ? '0' + mes : mes;
const ano = data.getFullYear();

const comecoMesAtual = `${ano}-${mes}-01`;

const ultimoDiaMes = new Date(ano, mes, 0).getDate();
const fimMesAtual = `${ano}-${mes}-${ultimoDiaMes}`;

const dataFormatada = `${ano}-${mes}-${dia}`;

export const fetchGamesAll = async () => {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${key}&dates=${comecoMesAtual},${fimMesAtual}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ocorreu um erro ao carregar os posts:', error);
        throw error; 
    }
};

export const fetchGamesToday = async () => {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${key}&dates=${dataFormatada},${dataFormatada}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Ocorreu um erro ao carregar os posts:', error);
        throw error; 
    }
};