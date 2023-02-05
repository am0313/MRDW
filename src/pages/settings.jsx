import { mdiCogOutline } from '@mdi/js'
import Icon from '@mdi/react'
import React from 'react'
import Card from "../components/Common/Card"
import Layout from '../components/Layout'

function SettingsPage() {


    return (
        <Layout className='p-4'>
            <div className='flex gap-1 items-center my-4'>
                <Icon path={mdiCogOutline} size={1} className="stroke-stone-200 fill-stone-200 text-stone-900" />
                <h1 className='flex text-xl'>설정</h1>
            </div>

            <Card>
                <h2>무릉도원 설정</h2>
                <h5 className='text-sm text-stone-400'>무릉도원의 설정을 변경합니다</h5>

                <hr className='my-2' />
            </Card>

        </Layout>
    )
}

export default SettingsPage