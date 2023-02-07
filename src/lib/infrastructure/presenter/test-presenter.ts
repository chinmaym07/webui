import IUseCaseOutputPort from "@/lib/core/port/primary/test-usecase-output-port";
import type { NextApiResponse } from "next";
import { injectable } from "inversify";
import { UserpassLoginResponse } from "@/lib/core/data/userpass-login";

@injectable()
class TestUseCasePresenter implements IUseCaseOutputPort<NextApiResponse> {
    response: NextApiResponse;
    constructor(response: NextApiResponse) {
        this.response = response;
    }
    present(responseModel: UserpassLoginResponse): void {
        this.response.status(200).json(responseModel.rucioIdentity + Math.random());
    }
}

export default TestUseCasePresenter;