import { useEffect } from "react";
import BarangayLogo from "@/assets/BarangayLogo.png";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import SampleData from "/SampleData.json";

const LearnMoreThirdPage = () => {
  useEffect(() => {
    const loadStotomasMio = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      } else {
        const script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0";
        document.body.appendChild(script);
      }
    };
    const loadSangguniangBayan = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      } else {
        const script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0";
        document.body.appendChild(script);
      }
    };
    const loadMunicipalPlanning = () => {
      if (window.FB) {
        window.FB.XFBML.parse();
      } else {
        const script = document.createElement("script");
        script.id = "facebook-jssdk";
        script.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0";
        document.body.appendChild(script);
      }
    };

    loadStotomasMio();
    loadSangguniangBayan();
    loadMunicipalPlanning();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row px-4 py-10 gap-10">
      {/* Left side */}
      <div className="flex-1 flex flex-col gap-5 justify-center items-center">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=61556343104505"
          data-tabs="timeline"
          data-width="420"
          data-height="400"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/profile.php?id=61556343104505"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/profile.php?id=61556343104505">
              Santo Tomas Information Office
            </a>
          </blockquote>
        </div>

        <div
          className="fb-page"
          data-href="https://www.facebook.com/SBOStoTomas"
          data-tabs="timeline"
          data-width="420"
          data-height="400"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/SBOStoTomas"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/SBOStoTomas">
              Sangguniang Bayan of Santo Tomas, Davao del Norte
            </a>
          </blockquote>
        </div>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/mpdosantotomas"
          data-tabs="timeline"
          data-width="420"
          data-height="400"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/mpdosantotomas"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/mpdosantotomas">
              Municipal Planning and Development Coordinator&#039;s Office Santo
              Tomas
            </a>
          </blockquote>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1 flex flex-col items-center text-center gap-5">
        {/* Text here regarding Santo Tomas */}
        <img src={BarangayLogo} alt="" />
        <h1 className="text-5xl text-[#263238] font-semibold">
          Barangay Officials 2023 - 2025
        </h1>
        <Table>
          <TableBody>
            {SampleData.map((official, index) => (
              <TableRow key={index}>
                <TableCell className="text-start border-2 max-w-60">
                  {official.position}
                </TableCell>
                <TableCell className="text-start border-2 max-w-60">
                  {official.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LearnMoreThirdPage;
