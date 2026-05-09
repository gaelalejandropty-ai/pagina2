// Mock de solicitudes de cédula estudiantil
// Última actualización: 2026-05-09 (rev 2)
window.SOLICITUDES = {
    '23542208': {
        numero: '23542208',
        cedula: '9-774-1242',
        nombres: 'Christopher Abiel',
        apellidos: 'Funes Diaz',
        sexo: 'Masculino',
        tipoSangre: '-',
        donanteOrganos: 'No',
        fechaSolicitud: '30 de abril de 2026',
        fechaVencimiento: '30 de mayo de 2026',
        oficinaEntrega: 'TRIBUNAL ELECTORAL -SANTIAGO',
        tramite: 'Cédula de nacional por primera vez',
        estado: 'EN PROCESO',
        estadoColor: 'amarillo',
        foto: '/public/foto1.png',
        slugFecha: '30-04-2026'
    },
    '13644209': {
        numero: '13644209',
        cedula: '8-1093-391',
        nombres: 'Ana Elena',
        apellidos: 'Name Chi',
        sexo: 'Femenino',
        tipoSangre: 'O+',
        donanteOrganos: 'No',
        fechaSolicitud: '28 de abril de 2026',
        fechaVencimiento: '28 de mayo de 2026',
        oficinaEntrega: 'EL DORADO -TRIADA',
        tramite: 'Cédula de nacional por primera vez',
        estado: 'PARA RETIRAR',
        estadoColor: 'verde',
        foto: '/public/foto2.png',
        slugFecha: '28-04-2026'
    },
    '13544290': {
        numero: '13544290',
        cedula: '8-1072-2460',
        nombres: 'Andrea Victoria',
        apellidos: 'Guerra Ramos',
        sexo: 'Femenino',
        tipoSangre: '-',
        donanteOrganos: 'No',
        fechaSolicitud: '7 de mayo de 2026',
        fechaVencimiento: '7 de junio de 2026',
        oficinaEntrega: 'EL DORADO -TRIADA',
        tramite: 'Cédula de nacional por primera vez',
        estado: 'EN PROCESO',
        estadoColor: 'amarillo',
        foto: '/public/foto3.png',
        slugFecha: '07-05-2026'
    }
};

window.buscarSolicitud = function (cedula, numero) {
    const s = window.SOLICITUDES[String(numero || '').trim()];
    if (!s) return null;
    const cedulaInput = String(cedula || '').trim();
    if (cedulaInput !== s.cedula) return null;
    return s;
};

window.slugSolicitud = function (s) {
    const acentos = { 'á':'a','é':'e','í':'i','ó':'o','ú':'u','ñ':'n','ü':'u' };
    const nombre = (s.nombres + ' ' + s.apellidos)
        .toLowerCase()
        .replace(/[áéíóúñü]/g, c => acentos[c] || c)
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    return 'solicitud-' + s.numero + '-' + nombre + '-' + s.slugFecha;
};
