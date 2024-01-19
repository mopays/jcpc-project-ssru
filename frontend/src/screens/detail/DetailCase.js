import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ModelCase } from '../../components/3d-Render/components/case';
import Alert from 'react-bootstrap/Alert';
import './detail.css'
function DetailCase(props) {
  return (
    <>
      <Alert variant={props.variant || 'danger'} className='text-center'><div className="alerts">เลือนดู3d</div></Alert>
        <div className='modelShow'>

        <Canvas  shadows camera={{ position: [1,1, 1], fov: 100 }}>
              <ModelCase/>
                    <Environment preset="sunset" />
              </Canvas>
        </div>
     
      
    <div className="container">
      
    <h1>Case</h1>
    <p>Case หรือ “เคส” คือ ตัวถังหรือตัวกล่องคอมพิวเตอร์ หลายคนจะเรียกว่าซีพียูเนื่องจากเข้าใจผิด</p>
    <p >
    สำหรับเคสนั้นใช้สำหรับบรรจุอุปกรณ์อิเลคทรอนิคส์หลักของคอมพิวเตอร์เอาไว้ข้างใน เช่น CPU เมนบอร์ด การ์ดจอฮาร์ดดิสก์ พัดลมระบายความร้อน และที่ขาดไม่ได้ก็คือ Power Supply ซึ่งจะมีติดอยู่ในเคสเรียบร้อย เคสคอมพิวเตอร์ควรเลือกที่รูปทรงสูงๆ เพื่อจะได้ติดตั้งอุปกรณ์ได้ง่าย และควรเลือกเคสที่มีช่องสำหรับติดตั้งฮาร์ดดิสก์ ซีดีรอมไดรฟ์ เผื่อเอาไว้หลายๆช่อง ในกรณีที่ต้องการติดตั้งอุปกรณ์เพิ่มเติมในภายหลังจะได้ง่ายขึ้น</p>
    </div>

  </>
  )
}

export default DetailCase