import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ModelCpu } from '../../components/3d-Render/components/cpu'
import Alert from 'react-bootstrap/Alert';
import './detail.css'

function DetailCpu(props) {
  return (
    <>
     <Alert variant={props.variant || 'danger'} className='text-center'><div className="alerts">เลือนดู3d</div></Alert>
     <div className='modelShow'>
      <Canvas  shadows camera={{ position: [1,1, 1], fov: 100 }}>
        <ModelCpu/>
        <Environment preset="sunset" />
    </Canvas>
    </div>
    <div className="container">
    <h1>CPU</h1>
    <p>หน่วยประมวลผลกลาง (central processing unit) หรือย่อว่า ซีพียู (CPU) </p>
    <p >
    เป็นวงจรอิเลคทรอนิกส์ที่ทำงาน หรือประมวลผล ตามชุดของคำสั่งเครื่องจากซอฟต์แวร์ คำนี้เริ่มใช้ในอุตสาหกรรมคอมพิวเตอร์ตั้งแต่ต้นศตวรรษ 1960 หน่วยประมวลผลเปรียบเสมือนเป็นสมองของคอมพิวเตอร์ ในการทำหน้าที่ตัดสินใจหรือคำนวณ จากคำสั่งที่ได้รับมา เช่น การเปรียบเทียบ การกระทำการทางคณิตศาสตร์ ฯลฯ โดยมีกระบวนการพื้นฐานคือ </p>
    <p>อ่านชุดคำสั่ง (fetch) - การอ่านชุดคำสั่งขึ้นมา 1 คำสั่งจากโปรแกรม ในรูปของรหัสเลขฐานสอง (Binary Code from on-off of BIT)</p>
    <p>ตีความชุดคำสั่ง (decode) - การตีความ 1 คำสั่งนั้นด้วยวงจรถอดรหัส (Decoder circuit) ตามจำนวนหลัก (BIT) ว่ารหัสนี้จะให้วงจรอื่นใดทำงานด้วยข้อมูลที่ใด</p>
    <p>ประมวลผลชุดคำสั่ง (execute) - การทำงานตาม 1 คำสั่งนั้น คือ วงจรใดในไมโครโปรเซสเซอร์ทำงาน เช่น วงจรบวก วงจรลบ วงจรเปรียบเทียบ วงจรย้ายข้อมูล ฯลฯ</p>
    <p>อ่านข้อมูลจากหน่วยความจำ (memory) - การติดต่อกับหน่วยความจำ การใช้ข้อมูลที่อยู่ในหน่วยจำชั่วคราว (RAM, Register) มาใช้ในคำสั่งนั้นโดยอ้างที่อยู่ (Address)</p>
    <p>เขียนข้อมูล/ส่งผลการประมวลกลับ (write back) - การเขียนข้อมูลกลับ โดยมีหน่วยจำ Register ช่วยเก็บที่อยู่ของคำสั่งต่อไป ภายหลังมีคำสั่งกระโดดบวกลบที่อยู่</p>
    <p>สถาปัตยกรรมของหน่วยประมวลผลกลาง ประกอบไปด้วย ส่วนควบคุมการประมวลผล (control unit) และ ส่วนประมวลผล (execution unit) และจะเก็บข้อมูลระหว่างการคำนวณ ไว้ในระบบเรจิสเตอร์</p>
    </div>

  </>
  )
}

export default DetailCpu