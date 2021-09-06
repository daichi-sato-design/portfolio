import { VFC, memo } from 'react'
import Image from 'next/image'

const Uc:VFC = () => {
  return (
    <div className="uc">
      <div className="uc__wrap">
        <div className="uc__img">
          <Image
            src="/common/i_uc.svg"
            alt="Dotted"
            width={400}
            height={428} />
        </div>
        <div className="uc__detail">
          <h2 className="uc__detail__ttl">Under construction</h2>
          <p className="uc__detail__txt">
            申し訳ありません。本ページは現在作成中です。
          </p>
        </div>
      </div>
    </div>
  )
}

export const UcMemo = memo(Uc);