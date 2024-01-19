import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ModelSsd } from '../../components/3d-Render/components/ssd'
import Alert from 'react-bootstrap/Alert';
import './detail.css'
function DetailSsd(props) {
  return (
    <>
    <Alert variant={props.variant || 'danger'} className='text-center mt-10'><div className="alerts">เลือนดู3d</div></Alert>
    <div className='modelShow'>
    <Canvas  shadows camera={{ position: [1,1, 1], fov: 100 }}>
                  <ModelSsd/>
      <Environment preset="sunset" />
  </Canvas>
  </div>
  <div className="container">
  <h1>SSD</h1>
  <p>SSD หรือในชื่อเต็มว่า Solid State Drive</p>
  <p >
  คืออุปกรณ์จัดเก็บข้อมูลชนิดหนึ่งที่ใช้กับคอมพิวเตอร์หรือโน๊ตบุ๊คเพื่อจัดเก็บข้อมูลแบบถาวรเหมือนกับฮาร์ดดิส SSD นั้นย่อมาจาก Solid State Drive ซึ่งมีลักษณะการทำงานคล้ายกับ Flash Drive โดยใช้หน่วยความจำแบบ Flash Memory Chips ซึ่งเปลี่ยนมาจากจานแม่เหล็กของฮาร์ดดิสทำให้มีเร็วและเสถียรกว่า SSD ถูกสร้างมาเพื่อทดแทนฮาร์ดดิสก์ทำให้เร็วและทนทานต่อแรงกระแทกมากกว่าฮาร์ดดิสก์ที่ใช้จานหมุน ด้วยขนาดที่เล็กไม่มีจานหมุนภายในทำให้กินไฟน้อย เมื่อนำไปลงวินโดว์จะทำให้ใช้เวลาเปิดเครื่องน้อยลง ปัจจุบัน SSD นั้นมีความจุตั้งแต่ 128GB ไปจนถึงหลาย TB  </p>
  <p>
  SSD นั้นใช้หน่วยความจำ Flash Memory ในการจัดเก็บข้อมูลผ่านการเก็บประจุไฟฟ้าภายในเซลล์ ทำให้การอ่านเขียนไฟล์ของ SSD นั้นทำได้เร็วกว่า HDD ที่ต้องรอให้แผ่นจานหมุนและความเร็วที่จำกัดกว่า ทำให้ SSD เหมาะสำหรับการเก็บไฟล์ที่ต้องการดึงส่งข้อมูลแบบเร็วๆ อย่างเช่นระบบ OS, โปรแกรม  และเกมต่างๆ และนอกจากความความเร็วที่สูงกว่าแล้ว SSD ยังไม่มีชิ้นส่วนที่ขยับเขยื่อนได้ ทำให้ SSD นั้นทนต่อการกระแทกได้มากกว่า HDD นอกจากนี้ SSD ยังมีขนาดที่เล็กกว่า ทำให้ SSD นั้นประหยัดพื้นที่ภายในเครื่องคอมพิวเตอร์และโน๊ตบุ๊ตอีกด้วย  </p>
  </div>

</>
  )
}

export default DetailSsd