export const VWOScript = () => {
  return (
    <script
      id="vwoCode"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          <!-- Start VWO Async SmartCode -->
          <link rel="preconnect" href="" />
          <script>
            // code
          </script>
          <!-- End VWO Async SmartCode -->
        `,
      }}
    />
  )
}
