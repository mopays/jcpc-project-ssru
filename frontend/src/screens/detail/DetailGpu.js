import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import './detail.css'
import { ModelGpu } from '../../components/3d-Render/components/gpu'
import Alert from 'react-bootstrap/Alert';

function DetailGpu(props) {
  return (
    <>
    <Alert variant={props.variant || 'danger'} className='text-center'><div className="alerts">เลือนดู3d</div></Alert>

    <div className='modelShow'>
    <Canvas  shadows camera={{ position: [1,1, 1], fov: 100 }}>
                  <ModelGpu/>
      <Environment preset="sunset" />
  </Canvas>
  </div>
  <div className="container">
  <h1>GPU</h1>
  <p>หน่วยประมวลผลกราฟิกส์ (GPU: graphics processing unit) หรือ หน่วยประมวลผลทางภาพ (VPU: visual processing unit) คือหน่วยประมวลผลพิเศษที่รับภาระการให้แสงและเงาคอมพิวเตอร์กราฟิกส์สามมิติแทนหน่วยประมวลผลกลาง ซึ่งหน่วยประมวลผลกราฟิกส์มีได้ทั้งที่เป็นการ์ดหรือเป็นส่วนหนึ่งของแผงวงจรหลักก็ได้ แต่ส่วนใหญ่ในปัจจุบันอยู่ในรูปของการ์ดแสดงผล</p>
  <p >
  ช่วยในการประมวลการทำงานในด้านภาพกราฟิกบนหน้าจอคอมพิวเตอร์ให้มีประสิทธิภาพมากยิ่งขึ้น การทำงานของจีพียูจะคล้ายกับซีพียู แต่จะแตกต่างกันตรงที่การ์ดแสดงผลสมัยเก่าทำหน้าที่แปลงข้อมูลดิจิตอลเป็นสัญญาณเท่านั้น แต่ปัจจุบันการ์ดแสดงผลสมัยใหม่ได้รวมความสามารถในการแสดงผลภาพสามมิติมาไว้เป็นมาตรฐาน และได้เรียกชื่อใหม่ว่า หน่วยประมวลผลกราฟิกส์ โดยสามารถลดงานด้านการแสดงผลของซีพียูได้มาก  </p>
  </div>

</>
  )
}

export default DetailGpu