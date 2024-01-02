import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ModelPowerSupply } from '../../components/3d-Render/components/powerSupply'

function DetailPowerSupply() {
  return (
    <>
      <Canvas  shadows camera={{ position: [1,1, 1], fov: 100 }}>
                    <ModelPowerSupply/>
        <Environment preset="sunset" />
    </Canvas>
    <div className="container">
    <h1>PowerSupply</h1>
    <p>แหล่งจ่ายไฟ (Power Supply)</p>
    <p >
    แหล่งจ่ายไฟหรือที่มักจะเรียกทับศัพท์ว่าเพาว์เวอร์ซัพพลาย เป็นส่วนประกอบที่สำคัญส่วนหนึ่งทำหน้าที่แปลงสัญญาณ ไฟฟ้ากระแสสลับจากแหล่งกำเนิดให้เป็นไฟฟ้ากระแสตรงด้วยความต่างศักย์ที่เหมาะสมก่อนเข้าสู่คอมพิวเตอร์ โดยมีสายเชื่อมต่อไปยังอุปกรณ์ประกอบต่าง ๆ ภายในเครื่อง ซึ่งในการแปลงสัญญาณไฟฟ้าดังกล่าวนี้จะก่อให้เกิดความร้อนขึ้นด้วย ดังนั้นภายในแหล่งจ่ายไฟจึงต้องมีพัดลมเพื่อช่วยในการระบายความร้อนออกจากตัวเครื่องซึ่งมีความสำคัญมาก เพราะการที่เครื่องมีความร้อนที่สูงมาก ๆ นั้น อาจจะเกิดความเสียหายต่ออุปกรณ์ประกอบภายในเครื่องได้ง่าย ปกติแล้วมักจะไม่ค่อยมีการเลือกซื้อพาว์เวอร์ซัพพลายกันนักถ้าไม่ใช่เนื่องจากตัวเก่าที่ใช้อยู่เกิดเสียไปโดยมากเราจะเลือกซื้อ มาพร้อมกับเคส
    </p>
    </div>

  </>
  )
}

export default DetailPowerSupply