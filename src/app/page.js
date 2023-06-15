import Image from "next/image";

export default function Home() {
  // Obtener la fecha actual
  let fechaActual = new Date();

  // Crear la otra fecha
  let otraFecha = new Date("2023-08-14"); // Aquí debes poner la fecha que desees

  // Calcular la diferencia en milisegundos
  let diferencia = otraFecha - fechaActual;

  // Convertir la diferencia a días
  let milisegundosPorDia = 24 * 60 * 60 * 1000; // Cantidad de milisegundos en un día
  let diasFaltantes = Math.floor(diferencia / milisegundosPorDia);
  return (
    <main className="bg-[#2B2730] h-screen">
      <h1 className="text-7xl pt-24 text-[#E966A0] font-bold text-center">
        Day Counter
      </h1>
      <div className="flex justify-center items-center">
        <div className="bg-white rounded p-5 mt-5">
          <h1 className="text-4xl text-[#6554AF]">Days until... August 16</h1>
          <h1 className="text-center text-4xl font-bold text-[#E966A0]">
            {diasFaltantes}
          </h1>
        </div>
      </div>
    </main>
  );
}
