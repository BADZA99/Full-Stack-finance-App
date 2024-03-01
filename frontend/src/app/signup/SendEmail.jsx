// cree un server component
import React from 'react'

export default async  function  SendEmail () {
     const res = await resend.emails.send({
                  from: "Acme <onboarding@resend.dev>",
                  to: [`${response.email}`],
                  subject: "Hello world",
                  react: <Email/>,
              });

    console.log(res)
  return (
    <div>
      
    </div>
  )
}
