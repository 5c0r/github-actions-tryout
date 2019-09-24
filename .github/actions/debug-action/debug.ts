import * as core from '@actions/core';

const run = async (): Promise<void> => {
    core.debug('Something to the output log');
}

run()

export default run