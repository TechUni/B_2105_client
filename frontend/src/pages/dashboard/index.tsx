import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useContext } from 'react'

import { AuthContext } from '../../components/auth/AuthProvider'
import { Layout } from '../../components/shared/Layout'
import { EXAMPLE_USER_01 } from '../../models/user'
import { InterviewMode } from '../../utils/mode'

const Dashboard: NextPage = () => {
  const { push } = useRouter()

  const handleClickStartInterview = (value: string) => {
    if (value === undefined) {
      alert('選択してください')
      return
    }
    push({ pathname: '/test', query: { id: value } })
  }

  const { currentUser } = useContext(AuthContext)

  return (
    <Layout left="icon" right={['profile']}>
      <div className="p-4 bg-gray-100">
        <div className="mx-auto max-w-7xl grid grid-cols-3 gap-4">
          {/* UserInfo */}
          <section className="rounded-xl overflow-hidden my-10">
            <div className="px-6 pb-4">
              <div className="font-bold text-2xl mb-2">
                🦔 Hello ! {currentUser?.displayName} さん
              </div>
              <p className="text-gray-700 text-base">
                {EXAMPLE_USER_01.discription}
              </p>
            </div>
            <div className="px-6 pt-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #TechUni
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #アプリ開発
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #機械学習
              </span>
            </div>
          </section>
          {/* NewInterview */}
          <section className="my-10 col-span-2">
            <p className="font-bold text-xl pl-2 mb-2">新規面接</p>
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-50 py-5 flex justify-center">
              <div className="m-8">
                <p className="font-bold text-lg mb-5">面接モード選択</p>
                <div className="flex space-x-16">
                  {InterviewMode.map(({ id, mode, name }) => (
                    <div key={id}>
                      <div
                        className="
                          rounded-md shadow-lg cursor-pointer flex items-center justify-center
                          w-48 h-24 bg-blue-500 text-gray-50 font-bold text-lg
                          hover:bg-opacity-50 transition ease-in-out duration-300
                        "
                        onClick={() => handleClickStartInterview(mode)}
                      >
                        {name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* InterviewedList */}
          <section className="col-span-4 mt-5 mb-10">
            <p className="font-bold text-xl pl-2 mb-2">過去の面接一覧</p>
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-50 py-5 flex justify-center">
              <div className="grid grid-cols-3 gap-4">
                {Array(6).fill(0).map((_, index) => (
                  <div key={index} className="">
                    <div className="w-80 h-64 bg-gray-400" />
                    <div className="px-2">
                      <p>作成日: 2021年11月14日</p>
                      <p>モード: 練習</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
