import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'


export default class Code extends React.Component {
  render() {
    let code = this.props.code
    let title = this.props.title

    return (
      <Highlight {...defaultProps} theme={theme} code={code} language="javascript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div style={{height: '100vh', width: '50vw', background: 'rgb(1, 22, 39)', color: 'rgb(214, 222, 235)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            
            <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              
              <h1>{title}</h1>

              <div style={{flexGrow: '1', display: 'flex', alignItems: 'center', overflow: 'hidden', transform: 'scale(0.9)'}}>

                <pre style={{marginTop: '0px'}}>

                  <div style={{position: 'relative'}}>
                
                    <code className={className, 'scroll-content'} style={Object.assign(
                        {},
                        { display: "inline-block", textAlign: "left", width: "100%", fontFamily: "Menlo, monospace" },
                        style
                      )}>
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </code>
                  </div>
                </pre>
              </div>
            </div>
          </div>
        )}
      </Highlight>
    )
  }
}
