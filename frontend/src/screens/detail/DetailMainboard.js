import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Mainboard } from '../../components/3d-Render/3d/mainboard'
import { ModelMainBoard } from '../../components/3d-Render/components/mainboard'

function DetailMainboard() {
  return (
    <>
      <Canvas  shadows camera={{ position: [1,1, 1], fov: 100 }}>
                    <ModelMainBoard/>
        <Environment preset="sunset" />
    </Canvas>
    <div className="container">
    <h1>Mainboard</h1>
    <p>แผงวงจรหลัก, แผงหลัก หรือชื่ออื่นเช่น เมนบอร์ด (mainboard/main board), มาเธอร์บอร์ด (motherboard), ซิสเต็มบอร์ด (system board), ลอจิกบอร์ด (logic board)</p>
    <p >
    เป็นแผงวงจร อิเล็กทรอนิกส์ส่วนสำคัญของคอมพิวเตอร์ แผงวงจรหลักของคอมพิวเตอร์ส่วนบุคคลทั่วไปจะประกอบด้วยซ็อกเก็ตสำหรับบรรจุหน่วยประมวลผลกลางและหน่วยความจำ มีไบออสเป็นเฟิร์มแวร์ พร้อมช่องให้สามารถเชื่อมต่ออุปกรณ์เสริมอื่น ๆ ได้ทั้งอุปกรณ์ติดตั้งภายในและอุปกรณ์เชื่อมต่อภายนอก</p>
    <p>
    แผงวงจรหลัก หมายถึง แผงวงจรหลักในเครื่องคอมพิวเตอร์ ที่อุปกรณ์ต่างๆเชื่อมต่ออยู่อีกทีหนึ่ง</p>
    </div>

  </>
  )
}

export default DetailMainboard