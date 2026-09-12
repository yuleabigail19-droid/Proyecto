const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Catálogo de servicios de SYSTEMHOME
  const camaras = await prisma.servicio.upsert({
    where: { nombre: 'Instalación de cámaras de seguridad' },
    update: {},
    create: {
      nombre: 'Instalación de cámaras de seguridad',
      descripcion: 'Montaje, cableado y configuración de cámaras IP y analógicas',
      precioReferencial: 350.00
    }
  });

  const alarmas = await prisma.servicio.upsert({
    where: { nombre: 'Instalación de sistemas de alarmas' },
    update: {},
    create: {
      nombre: 'Instalación de sistemas de alarmas',
      descripcion: 'Instalación de sensores de movimiento, sirenas y panel central',
      precioReferencial: 500.00
    }
  });

  const cercos = await prisma.servicio.upsert({
    where: { nombre: 'Instalación de cercos eléctricos' },
    update: {},
    create: {
      nombre: 'Instalación de cercos eléctricos',
      descripcion: 'Cercos perimetrales de alta seguridad con energizador',
      precioReferencial: 800.00
    }
  });

  // Cliente inicial
  const cliente = await prisma.cliente.create({
    data: {
      nombre: 'Comercial El Chaco',
      telefono: '71234567',
      direccion: 'Av. San Martín #450'
    }
  });

  // Solicitud inicial
  await prisma.solicitudServicio.create({
    data: {
      clienteId: cliente.id,
      servicioId: camaras.id,
      descripcion: 'Instalación de circuito cerrado de 4 cámaras Full HD',
      direccion: 'Av. San Martín #450',
      estado: 'Pendiente'
    }
  });

  console.log('Seed de SYSTEMHOME ejecutado exitosamente.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
