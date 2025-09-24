// import React, { useEffect, useRef, useState } from "react";
// import { Html5Qrcode } from "html5-qrcode";

// // Helper to get a unique id for every scanner instance
// const getUniqueId = () => `qr-reader-${Math.random().toString(36).substr(2, 9)}`;

// const QrScanner = ({ onScanSuccess, onClose }) => {
//   const [qrRegionId] = useState(getUniqueId());
//   const html5QrCodeRef = useRef();
//   const stopFlag = useRef(false); // prevent multiple stop calls

//   useEffect(() => {
//     stopFlag.current = false;
//     let scannerStarted = false;

//     // Wait for the DOM to paint
//     const startScanner = async () => {
//       const region = document.getElementById(qrRegionId);
//       if (!region) return; // Do nothing if not mounted

//       const qrCodeScanner = new Html5Qrcode(qrRegionId);
//       html5QrCodeRef.current = qrCodeScanner;

//       try {
//         await qrCodeScanner.start(
//           { facingMode: "environment" },
//           {
//             fps: 10,
//             qrbox: { width: 250, height: 250 }
//           },
//           (decodedText) => {
//             if (!stopFlag.current) {
//               onScanSuccess(decodedText);
//               stopScanner();
//             }
//           }
//         );
//         scannerStarted = true;
//       } catch (err) {
//         console.error("Scanner failed to start:", err);
//         onClose();
//       }
//     };

//     // Give React time to paint the div before starting
//     setTimeout(startScanner, 100);

//     const stopScanner = async () => {
//       stopFlag.current = true;
//       if (html5QrCodeRef.current) {
//         try {
//           await html5QrCodeRef.current.stop();
//         } catch (err) {
//           // Ignore if already stopped or DOM is gone
//         }
//         try {
//           await html5QrCodeRef.current.clear();
//         } catch (err) {
//           // Ignore if already cleared
//         }
//         html5QrCodeRef.current = null;
//       }
//     };

//     // On unmount, stop scanner
//     return () => {
//       stopScanner();
//     };
//   }, [onScanSuccess, onClose, qrRegionId]);

//   return (
//     <div className="flex flex-col items-center">
//       <div
//         id={qrRegionId}
//         style={{
//           width: "300px",
//           height: "300px",
//           maxWidth: "100%",
//           background: "#fafafa",
//         }}
//       />
//       <button
//         onClick={onClose}
//         className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
//       >
//         Cancel
//       </button>
//     </div>
//   );
// };

// export default QrScanner;

import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

// Helper to get a unique id for every scanner instance
const getUniqueId = () => `qr-reader-${Math.random().toString(36).substr(2, 9)}`;

const QrScanner = ({ onScanSuccess, onClose }) => {
  const [qrRegionId] = useState(getUniqueId());
  const html5QrCodeRef = useRef();
  const stopFlag = useRef(false); // prevent multiple stop calls

  useEffect(() => {
    stopFlag.current = false;

    // Wait for the DOM to paint
    const startScanner = async () => {
      const region = document.getElementById(qrRegionId);
      if (!region) return; // Do nothing if not mounted

      const qrCodeScanner = new Html5Qrcode(qrRegionId);
      html5QrCodeRef.current = qrCodeScanner;

      try {
        await qrCodeScanner.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 }
          },
          (decodedText) => {
            if (!stopFlag.current) {
              onScanSuccess(decodedText);
              stopScanner();
            }
          },
          (errorMessage) => {
            // Optional: Log per-frame scan errors (as in tutorial)
            console.warn("Scan frame error:", errorMessage);
          }
        );
      } catch (err) {
        console.error("Scanner failed to start:", err);
        onClose();
      }
    };

    // Give React time to paint the div before starting
    setTimeout(startScanner, 100);

    const stopScanner = async () => {
      stopFlag.current = true;
      if (html5QrCodeRef.current) {
        try {
          await html5QrCodeRef.current.stop();
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
          // Ignore if already stopped or DOM is gone
        }
        try {
          await html5QrCodeRef.current.clear();
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
          // Ignore if already cleared
        }
        html5QrCodeRef.current = null;
      }
    };

    // On unmount, stop scanner
    return () => {
      stopScanner();
    };
  }, [onScanSuccess, onClose, qrRegionId]);

  return (
    <div className="flex flex-col items-center">
      <div
        id={qrRegionId}
        style={{
          width: "300px",
          height: "300px",
          maxWidth: "100%",
          background: "#fafafa", // Optional: For visibility during debugging
        }}
      />
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Cancel
      </button>
    </div>
  );
};

export default QrScanner;
